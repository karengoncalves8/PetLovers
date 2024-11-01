import React, { ReactNode, useState } from 'react';

import './style.css';

import logo from '../../assets/logo/logo.svg'

import { BiSolidChevronLeftSquare, BiSolidChevronRightSquare } from "react-icons/bi";
import { AiFillHome, AiFillProduct } from "react-icons/ai";
import { FaHandHolding, FaPaw, FaUserCircle } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { BsPersonVcardFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const location = useLocation()
    
    const [ collapsed, setCollapsed ] = useState(true)

    const sidebar = document.querySelector('.sidebar')

    const toggleNavbar = () => {
      sidebar?.classList.toggle('collapsed')
      if(collapsed){
        setCollapsed(false)
      }else{
        setCollapsed(true)
      }
    }

    const toggleResposiveNav = () => {
      sidebar?.classList.toggle('menu-active')
    }

    return (
      <aside className='sidebar collapsed'>
        <header className='sidebar-header'>
          <img src={logo} className='header-logo'></img>
          {collapsed 
            ? <BiSolidChevronRightSquare className="toggler-icon icon" onClick={toggleNavbar}/>
            : <BiSolidChevronLeftSquare className="toggler-icon icon" onClick={toggleNavbar}/>
          }
          <RxHamburgerMenu className="menu-icon icon" onClick={toggleResposiveNav}/>
        </header>
         
        <nav className="sidebar-nav">
          <ul className="nav-list routes-nav">
            <li className={location.pathname === '/Inicio' ? 'nav-item active' : 'nav-item'}>
              <div className="nav-link">
                <AiFillHome className='icon'/>
                <span className="nav-label">Ínicio</span>
              </div>
              <span className="nav-tooltip">Ínicio</span>
            </li>
            <li className={location.pathname === '/Produtos' ? 'nav-item active' : 'nav-item'}>
              <div className="nav-link">
                <AiFillProduct className='icon' />
                <span className="nav-label">Produtos</span>
              </div>
              <span className="nav-tooltip">Produtos</span>
            </li>
            <li className={location.pathname === '/Servicos' ? 'nav-item active' : 'nav-item'}>
              <div className="nav-link">
                <FaHandHolding className='icon'/>
                <span className="nav-label">Serviços</span>
              </div>
              <span className="nav-tooltip">Serviços</span>
            </li>
            <li className={location.pathname === '/Clientes' ? 'nav-item active' : 'nav-item'}>
              <div className="nav-link">
                <HiUsers className='icon' />
                <span className="nav-label">Clientes</span>
              </div>
              <span className="nav-tooltip">Clientes</span>
            </li>
            <li className={location.pathname === '/Pets' ? 'nav-item active' : 'nav-item'}>
              <div className="nav-link">
                <FaPaw className='icon' />
                <span className="nav-label">Pets</span>
              </div>
              <span className="nav-tooltip">Pets</span>
            </li>
            <li className={location.pathname === '/Funcionarios' ? 'nav-item active' : 'nav-item'}>
              <div className="nav-link">
                <BsPersonVcardFill className='icon' />
                <span className="nav-label">Funcionários</span>
              </div>
              <span className="nav-tooltip">Funcionários</span>
            </li>
          </ul>

          <ul className="nav-list actions-nav">
            <li className="nav-item">
              <div className="nav-link">
                <FaUserCircle className='icon' />
                <span className="nav-label">Perfil</span>
              </div>
              <span className="nav-tooltip">Perfil</span>
            </li>
            <li className="nav-item logout">
              <div className="nav-link">
                <FiLogOut className='icon' />
                <span className="nav-label">Sair</span>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    );
}

export default Sidebar