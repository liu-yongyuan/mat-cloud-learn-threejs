import React from 'react';

import { Button, Calendar, Card, Col, DatePicker, Divider, Flex, Pagination, Row, Typography } from 'antd';
const cardStyle: React.CSSProperties = {
  width: 620,
};

const imgStyle: React.CSSProperties = {
  display: 'block',
  width: 273,
};

const CardBox: React.FC<{ children: React.ReactNode; height: number }> = (props) => (
  <Card hoverable style={{ ...cardStyle, height: props.height }} bodyStyle={{ padding: 0, overflow: 'hidden' }}>
    {props.children}
  </Card>
);

export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <Row>
      <Col span={24}>
        <CardBox height={230}>
          <Calendar fullscreen={false} />
        </CardBox>
      </Col>
    </Row>
  );
};

export default Home;
