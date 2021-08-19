import React from 'react'
import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
    logo: {
        // fontSize: "3rem",
        // color: "red",
        color: "white",
        fontWeight: "800",
    }
})

function Logo() {
    const classes = styles()
    return (
        <div>
            <h2 className={classes.logo}>audiophile</h2>
        </div>
    )
}

export default Logo
