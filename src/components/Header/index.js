import React from 'react';
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { connect } from 'react-redux'
import { Container, Cart } from './styles';

import logoImg from '../../assets/images/logo.svg';

function Header({ cartSize }) {

  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Rocketshoes"/>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span> {cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff"/>
      </Cart>

    </Container>
  );
}

/* Recebendo as modificações do state do redux */
export default connect( state => ({
  cartSize: state.cart.length,
}))(Header);