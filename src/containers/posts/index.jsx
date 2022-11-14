import React from 'react';
import {Wrapper, Title, Flex} from 'components/ui';
import PostCard from 'components/PostCard';
import Post1 from 'assets/post-1.png';
import Post2 from 'assets/post-2.png';
import Post3 from 'assets/post-3.png';
import Post4 from 'assets/post-4.png';

const postData = [
    {
        id:1,
        image: Post1,
        title: "Изогнутая верхняя труба",
        text: "Меньшие рамы (XS и S) имеют верхнюю трубу, которая опускается вниз по мере приближения к подседельной трубе.амы большего размера (M и выше) имеют прямую верхнюю трубу, для более высоких райдеров.",
    },
    {
        id:2,
        image: Post2,
        title: "Активный брейк - шарнир",
        text: "Позволяет независимо подстраивать реакцию подвески на ускорение и тормозное усилие. Это означает, что вы получаете более уверенный контроль, когда  это  больше всего необходимо.",
    },
    {
        id:3,
        image: Post3,
        title: "РЕ: АКТИВ СКВОЗНОго ВАЛА",
        text: "Дает вам непревзойденное сцепление и контроль с помощью амортизатора, который реагирует на местность быстрее, чем это возможно.",
    },
    {
        id:4,
        image: Post4,
        title: "Идеальная конструкция",
        text: "Конструкция рамы Trek Straight Shot оптимизирует соотношение жесткости к весу для более отзывчивой езды. Вы сможете усерднее работать и оставаться дальше в своем положении, когда ситуация станет более тяжелой.",
    },
];

function Posts() {
    return(
        <section>
            <Wrapper>
                <Title withBorder margin="70px 0 30px">
                    ФУНКЦИИ
                </Title>
                <Flex align="baseline"  gap="30px">
                    {postData.map((item) => <PostCard key={item.id} {...item}/>)}
                </Flex>
            </Wrapper>
        </section>
    )
}
export default Posts;