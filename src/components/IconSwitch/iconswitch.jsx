import './iconswitch.css'

export default function IconSwitch(props) {

    const {icon, handler} = props;

    const changeView = (e) => {
        e.preventDefault();
        handler();
    }
    return (
        <div className='icon-switch'>
            <div className='icon' onClick={changeView}>{icon}</div>
        </div>
    )
}