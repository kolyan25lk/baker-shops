import React, {forwardRef} from 'react';
import {Wrapper, Title, Text} from 'components/uai';
import Form from 'components/Form';

const Order = forwardRef((_, ref) => (  
    <section>
        <Wrapper>
            <Title ref={ref} withBorder margin= "70px 0 30px">
            УСПЕЙ СТАТЬ ПЕРВЫМ
            </Title>
            <Text>
            Успей быть в списке первых райдеров, успевших стать владельцами нового FUEL EX 9.8 и ощути все эмоции, переданные будущей легендой даунхилла. При этом первые райдеры, заказавшие новую модель получат дополнительный пакет поддержки на обслуживания от Trek.
            </Text>
            <Form />
        </Wrapper>
    </section>  
));

export default Order;