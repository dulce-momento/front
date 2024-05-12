import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, CART_ROUTE } from "../utils/consts";
import { Button, Image } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import '../index.css';

const Navigation = observer(() => {
    const { client } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        client.setClient({})
        client.setIsAuth(false)
    };

    return (
        <Navbar bg="transparent" variant="dark" id='nav-bar'>
            <Container>
                <NavLink id='nav-brand' style={{ color: '#6d597a', fontFamily: "Polka" }} to={SHOP_ROUTE}>Dulce Momento</NavLink>
                <Nav className="ml-auto justify-content-end">
                    <NavLink
                        variant={"outline-light"}
                        className="ml-4 nav-link-middle "
                    >
                        каталог
                    </NavLink>
                    <NavLink
                        variant={"outline-light"}
                        className="ml-4 nav-link-middle"
                    >
                        доставка
                    </NavLink>
                    <NavLink
                        variant={"outline-light"}
                        className="ml-4 mr-4 nav-link-middle"
                    >
                        FAQ
                    </NavLink>
                </Nav>
                {client.isAuth ?
                    <Nav id='nav-bar-right' className="ml-auto" style={{ color: 'black' }}>
                        <Button
                            variant={"outline-light"} style={{ color: 'black' }}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                        <NavLink className="ml-2" to={LOGIN_ROUTE}>
                            <Image className='img-filtered' src="/account.png" />
                        </NavLink>
                        <NavLink className="ml-2" to={CART_ROUTE}>
                            <Image className='img-filtered' src="/cart.png" />
                        </NavLink>
                    </Nav>
                    :
                    <Nav id='nav-bar-right' className="ml-auto" style={{ color: 'white' }}>
                        <NavLink className="ml-2" to={LOGIN_ROUTE} onClick={() => client.setIsAuth(true)}>
                            <Image className='img-filtered' src="/account.png" />
                        </NavLink>
                        <NavLink className="ml-3 mr-3" to={CART_ROUTE}>
                            <Image className='img-filtered' src="/cart.png" />
                        </NavLink>
                    </Nav>
                }

            </Container>
        </Navbar>

    );
});

export default Navigation;