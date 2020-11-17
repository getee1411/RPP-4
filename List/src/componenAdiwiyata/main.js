import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom'

import Beranda from './beranda'
import Galery from './galery'
import Kalender from './kalender'
import Agenda from './agenda'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route exact path="/galery" component={Galery}/>
        <Route exact path="/kalender" component={Kalender}/>
        <Route exact path="/agenda" component={Agenda}/>
    </Switch>
)

export default Main