import {Form, Button, Checkbox, InputNumber} from 'antd';
import styled from "styled-components";

export function ReservationForm({submitForm}) {
    const onFinish = (values) => {
        submitForm(values);
    }
    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo)
    }
    return (
        <Wrapper>
            <Form

                name="reservation"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Liczba miejsc:"
                    name="numberOfSeats"
                >
                    <InputNumber style={{width: '100%'}}/>
                </Form.Item>


                <Form.Item name="nextToEachOther" style={{width: '100%'}} valuePropName="checked">
                    <Checkbox>Czy miejsca mają być obok siebie?</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" size="large" style={{width: '100%'}} htmlType="submit">
                        Wybierz miejsca
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh
`
