import React from 'react';
import { Container } from "react-bootstrap";
import "../index.css";

const FAQ = () => {

    return (
        <Container id="faq-cont">
            <Container>
                Часто задаваемые вопросы
            </Container>
            <Container>
                <h5>Доставка</h5>
                <Container>
                В Dulce Momento доступны различные варианты доставки, чтобы удовлетворить потребности всех клиентов. Мы предлагаем следующие варианты доставки:<br/>

1. Самовывоз:<br/>

Вы можете забрать свой заказ самостоятельно из нашего магазина по адресу.<br/>

2. Курьерская доставка:<br/>

Мы предоставляем услуги курьерской доставки по городу. Курьер доставит ваш заказ прямо к вашему дому или офису. Стоимость и условия курьерской доставки уточняйте у наших менеджеров.

                </Container>
            </Container>
        </Container>
    );
};

export default FAQ;
