import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/listview";
import IconSwitch from "../IconSwitch/iconswitch";
import { useState } from "react";


export default function Store() {

    let [mode, modeSwitch] = useState('view_list');

    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }];

      const onSwitch = () => {
        modeSwitch(
            mode === 'view_list' ? mode = 'view_module' : mode = 'view_list'
            
        )

      }

    return (
        <>
        <IconSwitch icon={mode} handler={onSwitch}/>
        {mode === 'view_list' ? <ListView products={products}></ListView> : <CardsView products={products}/>}
        
        </>
    )
}