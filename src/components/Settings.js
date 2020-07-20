import React, { Component } from 'react'
import { observer } from 'mobx-react'

class Settings extends Component {
    constructor(props) {
        super(props)

        const {gridStore} = props

        this.state = {
            height: gridStore.height,
            width: gridStore.width,
        }
    }

    handleInputChange = (e) => {
        const { id, value } = e.target

        this.setState({
            [id]: value
        })

    }

    handleHeightWidthChange = (e) => {
        const { height, width } = this.state
        const { gridStore } = this.props
        const { setHeight, setWidth } = gridStore

        setHeight(height)
        setWidth(width)
    }

    render() {
        const { gridStore } = this.props
        const { height, width } = this.state

        return (
            <div id="settingsBox">
                Settings
                <input type="number" id="grid-height" id="height" value={height} onChange={this.handleInputChange}/>
                <input type="number" id="grid-width" id="width" value={width} onChange={this.handleInputChange}/>
                <button onClick={this.handleHeightWidthChange}>Confirm</button>
            </div>
        )
    }
}

export default observer(Settings)