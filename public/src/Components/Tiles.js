import React from 'react'
import './Tiles.css'
import Button from 'react-bootstrap/Button';
function Tiles(props) {
    return (
        <div>
            <Button id="btn" >{props.name}</Button>{' '}
        </div>
    )
}

export default Tiles

