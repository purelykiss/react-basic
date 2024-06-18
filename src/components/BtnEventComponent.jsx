import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnEventComponent extends Component {
    constructor(props) {
        super(props);
        console.log('순서-constructor');
        this.state = { count: props.count }; //BtnEventComponent.jsx 파일에 코드 추가
        this.clickEvent = this.clickEvent.bind(this);//this를 바인딩하면, clickEvent함수에서 this를 사용할 수 있다

    }

    clickEvent() {
        //state 변경 let count = this.state.count + 1;
        //Add(2,3); prevState => (); 람다함수 = 화살표함수 = Arrow 함수
        //function(prevState) {}
        this.setState(prevState => ({
            count: prevState.count + 1
        })
        );
    } //setState로 변경해야 화면에 렌더링 된다.

    shouldComponentUpdate(nextProps, nextState) {
        return true; //화면업데이트-재 렌더링
    }

    componentWillMount() {
        console.log('순서-componentWillMount');
    }

    componentDidMount() {//렌더링 이후에 실행
        console.log('순서-componentDidMount');
    }

    componentWillReceiveProps(nextProps) {//버튼 이벤트를 불러올 때
        console.log('순서-componentWillReceiveProps');
        this.setState({count: nextProps.count}); //이 부분 추가
    }

    shouldComponentUpdate(nextProps, nextState) {//갱신, 업데이트 되기 전
        console.log('순서-shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {//갱신되기 전
        console.log('순서-componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('순서-componentWillUnmount');
    }

    render() {
        console.log('순서-render');
        const {nodeValue} = this.props;
        return (
            <div>
                <p>카운트: {this.state.count}</p>
                <button onClick={this.clickEvent}>카운트 증가</button>
                {nodeValue}
                {this.props.children}{/** 자식노드 출력 */}
            </div>
        );
    }
}

BtnEventComponent.propTypes = {

};

export default BtnEventComponent;