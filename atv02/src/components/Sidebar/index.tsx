import React, { ReactNode, useState } from 'react';

import './style.css';

import logo from '../../assets/logo/logo.svg'

import { BiSolidChevronRightSquare } from "react-icons/bi";
import { AiFillHome, AiFillProduct } from "react-icons/ai";
import { FaHandHolding, FaPaw, FaUserCircle } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { BsPersonVcardFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

const Sidebar: React.FC = () => {

    return (
      <aside className='sidebar'>
        <header className='sidebar-header'>
          <img src={logo} className='header-logo'></img>
          <BiSolidChevronRightSquare className="toggler-icon icon"/>
        </header>
         
        <nav className="sidebar-nav">
          <ul className="nav-list routes-nav">
            <li className="nav-item">
              <div className="nav-link">
                <AiFillHome className='icon'/>
                <span>Ínicio</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <AiFillProduct className='icon' />
                <span>Produtos</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <FaHandHolding className='icon'/>
                <span>Serviços</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <HiUsers className='icon' />
                <span>Clientes</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <FaPaw className='icon' />
                <span>Pets</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <BsPersonVcardFill className='icon icon-func' />
                <span>Funcionários</span>
              </div>
            </li>
          </ul>

          <ul className="nav-list actions-nav">
            <li className="nav-item">
              <div className="nav-link">
                <FaUserCircle className='icon' />
                <span>Perfil</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <FiLogOut className='icon' />
                <span>Sair</span>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    );
}

export default Sidebar