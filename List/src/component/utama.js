import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Beranda from './beranda'
import TentangSaya from './tentangsaya'
import Karya from './karya'
import Kontak from './kontak'
import List from './List'


const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/tentangsaya" component={TentangSaya} />
        <Route path="/karya" component={Karya} />
        <Route path="/kontak" component={Kontak} />
        <Route path="/List" component={List} />
    </Switch>
)

export default Utama;