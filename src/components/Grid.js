import React, { Component } from 'react'
import { observer } from 'mobx-react'

class Grid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isDrawing: false
        }
    }

    handleMouseDown = (e) => {
        e.preventDefault()

        this.setState({
            isDrawing: true
        })
    }

    handleMouseUp = (e) => {
        this.setState({
            isDrawing: false
        })
    }

    handleMouseDownCell = (e) => {
        this.updateGrid(e)
    }

    handleMouseOverCell = (e) => {
        if (this.state.isDrawing) {
            this.updateGrid(e)
        }
    }

    updateGrid = (e) => {
        const { gridStore } = this.props

        e.target.className = "gridCell sprite quartz"
        const row = e.target.attributes.getNamedItem('row').value
        const col = e.target.attributes.getNamedItem('col').value
        gridStore.setCellMaterial(row, col, 1)
    }
    

    renderGrid() {
        const { gridStore } = this.props
        const { height, width, grid } = gridStore
        
        return (
            <table>
                <tbody>
                    {grid.map((row, rindex) => (
                        <tr key={`r-${rindex}`}>
                            {row.map((cell, cindex) => (
                                <td key={`${rindex}-${cindex}`}
                                    
                                >
                                    <div className="gridCell sprite air"
                                        row={rindex}
                                        col={cindex}
                                    onMouseDown={this.handleMouseDownCell}
                                    onMouseOver={this.handleMouseOverCell}
                                    >{cell}</div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div id="gridContainer" style={{border: '1px solid black'}}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            onMouseLeave={this.handleMouseUp}>
                {this.renderGrid()}
            </div>
        )
    }
}

export default observer(Grid)