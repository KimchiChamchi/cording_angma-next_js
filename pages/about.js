import { Button, Divider, Header, Input, List } from "semantic-ui-react";

export default function About() {
  return (
    <div>
      <Header as={"h3"} style={{ paddingTop: 40 }} color="teal">
        회사 소개
      </Header>
      <Divider></Divider>
      <List>
        <List.Item>
          <List.Icon name="users"></List.Icon>
          <List.Content>시맨틱 유아이</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker"></List.Icon>
          <List.Content>NY, 뇩</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail"></List.Icon>
          <List.Content>
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify"></List.Icon>
          <List.Content>
            <a href="http://www.semantic-ui.com">semantic-ui.com</a>
          </List.Content>
        </List.Item>
      </List>
      <Header as={"h3"} style={{ paddingTop: 40 }} color="teal">
        무늬사항
      </Header>
      <Divider></Divider>
      <div>
        <>제목</>
        <Input></Input>
      </div>
      <div>
        <>내용</>
        <Input></Input>
      </div>
      <Button color="green">가위바위 보내기</Button>
    </div>
  );
}
