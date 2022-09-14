import React from 'react';
import Square from './Square';
import { View } from 'react-native';

import { registerRootComponent } from 'expo';

import SweetAlert from 'react-native-sweet-alert';

class Board extends React.Component {
    state = {
        // Initial settings etc.
        boardSettings: this.initBoardSettings(this.props.height, this.props.width, this.props.dogs),
        gameWon: false,
        dogCount: this.props.dogs
    };

    // Gets the dog data from the board
    getDogs(data) {
        let squareArray = [];
        // map over array of squares to push dogs into them
        data.map(datarow => {
            datarow.map((dataitem) => {
                if (dataitem.isDog) {
                    squareArray.push(dataitem);
                }
                return '';
            })
            return '';
        })
        return squareArray;
    }

    // Get default door data from squares
    getHidden(data) {
        let squareArray = [];
        data.map(datarow => {
            datarow.map((dataitem) => {
                if(!dataitem.isRevealed) {
                    squareArray.push(dataitem)
                }
                return '';
            })
            return '';
        })
        return squareArray;
    }

    //generate random number to assign to squares for dogs/cats
    getRandomNumber(dimension) {
        return Math.floor((Math.random() * 1000) + 1) % dimension;
    }

    //gets initial board settings to make everything hidden
    initBoardSettings(height, width, dogs) {
        let data = [];
        for (let i = 0; i < height; i++) {
            data.push([]);
            for(let j = 0; j < width; j++) {
                data[i][j] = {
                    x: i,
                    y: j,
                    isDog: false,
                    neighbour: 0,
                    isRevealed: false,
                    isEmpty: false,
                    isCat: false,
                }
            }
        }
        // will add dogs and doors to board when defined
        data = this.addDogs(data, height, width, dogs);
        data = this.getNeighbours(data, height, width);
        return data;
    }

    // Place dogs on empty board
    addDogs(data, height, width, dogs) {
        let valx, valy, dogsAdded = 0;
        while (dogsAdded < dogs) {
            valx = this.getRandomNumber(width);
            valy = this.getRandomNumber(height);

            if(!(data[valx][valy].isDog)) {
                data[valx][valy].isDog = true;
                dogsAdded++;
            }
        }
        return (data);
    }

    getNeighbours(data, height, width) {
        let updateData = data;

        // loop through board to add values randomly
        for( let i = 0; i < height; i++ ) {
            for ( let j = 0; j < width; j++ ) {
                // if no dog
                if (data[i][j].isDog !== true) {
                    let dog = 0;
                    // will find area on sqares to add new dogs
                    const area = this.traverseBoard(data[i][j].x, data[i][j].y, data);
                    // move in rando motion to add dogs
                    area.map(value => {
                        if(value.isDog) {
                            dog++
                        }
                        return '';
                    })
                    if(dog === 0) {
                        updateData[i][j].isEmpty = true;
                    }
                    updateData[i][j].neighbour = dog;
                }
            }
        }
        // board with added dogs
        return(updateData)
    }

    // look across squares to find dogs
    traverseBoard(x, y, data) {
        const pos = [];
        // traverse up
        if (x > 0) {
            pos.push(data[x - 1][y]);
        }
        // down
        if (x < this.props.height - 1) {
            pos.push(data[x + 1][y])
        }
        //left
        if (y > 0) {
            pos.push(data[x][y - 1])
        }
        // right
        if ( y < this.props.width - 1) {
            pos.push(data[x][y + 1])
        }
        // top left
        if (x > 0 && y > 0) {
            pos.push(data[x - 1][y - 1])
        }
        // top right
        if (x > 0 && y < this.props.width - 1) {
            pos.push(data[x - 1][y + 1]);
        }
        //traverse bottom right
        if (x < this.props.height - 1 && y < this.props.width - 1) {
            pos.push(data[x + 1][y + 1]);
        }
        //traverse bottom left
        if (x < this.props.height - 1 && y > 0) {
            pos.push(data[x + 1][y - 1]);
        }
        return pos;
    }

    // reveal the whole board
    revealBoard() {
        // render updated data in new board
        let updatedData = this.state.boardSettings;
        updatedData.map((datarow) => {
            datarow.map((dataitem) => {
                dataitem.isRevealed = true;
                return '';
            })
            return '';
        })
        // update initial boarddata to current one
        this.setState({
            boardSettings: updatedData
        })
    }

    // helps identify empty squares
    revealEmpty(x, y, data) {
        // will look acros the board
        let area = this.traverseBoard(x, y, data);
        // ... and map to find where positions have not yet been revealed/taken
        area.map(value => {
            if(!value.isRevealed && (value.isEmpty || !value.isDog)) {
                data[value.x][value.y].isRevealed = true;
                if(value.isEmpty) {
                    this.revealEmpty(value.x, value.y, data);
                }
            }
            return '';
        })
        return data;
    }

    // click events for win/lose states
    handleCellClick(x, y) {
        let win = false;
        if (this.state.boardSettings[x][y].isRevealed) return null;
        if (this.state.boardSettings[x][y].isDog) {
            this.revealBoard();
            // SweetAlert.showAlertWithOptions({
            //     title: "GAME OVER!",
            //     buttons: {
            //         quit: {
            //             text: "Retry",
            //             value: 'quit',
            //             className: 'retry-btn'
            //         },
            //         finish: {
            //             text: 'Accept prize?',
            //             value: 'finish',
            //             className: 'retry-btn'
            //         }
            //     }
            // })
            // .then((value) => {
            //     switch(value) {
            //         case 'quit':
            //             window.location.reload();
            //             break;

            //         case 'finish':
            //             window.location = 'https://youtu.be/gu3KzCWoons'
            //             break;
                    
            //         default:
            //             SweetAlert.showAlertWithOptions({
            //                 title: 'text'
            //             })
            //     }
            // })
        }

        // Updates game state and displays losing alert
        let updatedData = this.state.boardSettings;
        updatedData[x][y].isCat = false;
        updatedData[x][y].isRevealed = true;

        // if player clicks on empty square
        if (updatedData[x][y].isEmpty) {
            updatedData = this.revealEmpty(x, y, updatedData);
        }
        // alert is game won
        if (this.getHidden(updatedData).length === this.props.dogs) {
            win = true;
            this.revealBoard();
            // SweetAlert.showAlertWithOptions({
            //     title: "GAME WON!",
            //     buttons: {
            //         quit: {
            //             text: "Quit Game",
            //             value: 'quit',
            //             className: 'retry-btn'
            //         },
            //         finish: {
            //             text: "Accept Prize",
            //             value: 'finish',
            //             className: 'retry-btn'
            //         }
            //     }
            // })
            // .then((value) => {
            //     switch(value) {
            //         case 'quit':
            //             window.location.reload();
            //             break;

            //         case 'finish':
            //             window.location = "https://youtu.be/QH2-TGUlwu4";
            //             break;

            //         default:
            //             SweetAlert.showAlertWithOptions({
            //                 title: 'titletext'
            //             });
            //     }
            // })
        }

        this.setState({
            boardSettings: updatedData,
            dogCount: this.props.dogs - this.getCats(updatedData).length,
            gameWon: win
        })
    }

    // renders the final board to play on
    renderBoard(data) {
        // will map over squares to return data items and event handlers
        return data.map((datarow) => {
            return datarow.map((dataitem) => {
                return (
                    <View key={dataitem.x * datarow.length + dataitem.y}>
                        <Square onClick={() => this.handleCellClick(dataitem.x, dataitem.y)} value={dataitem}/>
                        {(datarow[datarow.length - 1] === dataitem) ? <div className="clear" /> : ''}
                    </View>
                )
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        if(JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
            this.setState({
                boardSettings: this.initBoardSettings(nextProps.height, nextProps.width, nextProps.dogs),
                gameWon: false,
                dogCount: nextProps.dogs
            })
        }
    }

    render() {
        return (
            <View className="board">
                {this.renderBoard(this.state.boardSettings)}
            </View>
        )
    }
}

export default Board;