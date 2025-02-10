import Form from './Form'

import './css/Page.css'

import { useState } from "react"

const Page = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/** Navbar */}
            <nav className='"navbar navbar-dark bg-dark px-3'>
                <button className="btn btn-outline-light" onClick={toggleSidebar}>
                    ☰
                </button>
                <a href="" className="navbar-brand mx-auto">
                    HTTP REQUESTS
                </a>
            </nav>

            {/** Sidebar */}
            <div className={`sidebar ${isOpen ? "active" : ""}`}>
                <h4 className="text-center">Menu</h4>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a href="" className="nav-link text-white">
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link text-white">
                            Configurações
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link text-white">
                            Perfil
                        </a>
                    </li>
                </ul>
            </div>

            {/** Overlay */}
            {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

            {/** Content */}
            <Form />
        </>
    )
}

export default Page
