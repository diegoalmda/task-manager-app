import React, { useMemo, useRef, useState } from "react";
import {
  AppHeroContainer,
  Body,
  Container,
  CounterContainer,
  EmptyListContainer,
  EmptyListFeaturedTextIcon,
  EmptyListMainMessage,
  EmptyListSecondaryMessage,
  Header,
  LogoContainer,
  SubTitle,
  TaskCountersContainer,
  TaskInputContainer,
  TasksCount,
  TasksInfo,
  TasksListContainer,
  Title,
} from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../styles/theme";
import { NewTaskInput } from "../components/NewTaskInput";
import { TaskItem } from "../components/TaskItem";
import { type ITask } from "../contexts/taskContext/taskType";
import {
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

import { useTaskContext } from "../contexts/taskContext";

export default function Page(): React.JSX.Element {
  const [startEditing, setStartEditing] = useState<boolean>(false);
  const { tasks } = useTaskContext();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const listRef = useRef(null);

  const handleStopEditing = () => {
    setStartEditing(false);
  };

  const handleScrollToItem = (index: number) => {
    setStartEditing(true);
    listRef.current.scrollToIndex({ index, animated: true });
  };

  const totalTasksDone = useMemo(() => {
    return tasks.reduce((total, task) => (task.done ? total + 1 : total), 0);
  }, [tasks]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <AppHeroContainer>
            <LogoContainer>
              <Logo width={RFValue(36)} height={RFValue(36)} />
              <Title>Lista de tarefas</Title>
            </LogoContainer>
            <SubTitle>Crie tarefas e organize seu dia</SubTitle>
          </AppHeroContainer>
          <TaskInputContainer>
            <NewTaskInput />
          </TaskInputContainer>
        </Header>

        <Body>
          <TaskCountersContainer>
            <CounterContainer finished={false}>
              <TasksInfo finished={false}>Total</TasksInfo>
              <TasksCount finished={false}>{tasks.length}</TasksCount>
            </CounterContainer>
            <CounterContainer finished={true}>
              <TasksInfo finished={true}>Concluídas</TasksInfo>
              <TasksCount finished={true}>{totalTasksDone}</TasksCount>
            </CounterContainer>
          </TaskCountersContainer>

          {tasks.length > 0 ? (
            <TasksListContainer>
              <FlatList
                ref={listRef}
                data={tasks}
                keyExtractor={(item: ITask) => item.id}
                renderItem={({ item, index }) => (
                  <Animated.View
                    style={{ transform: [{ translateY: animatedValue }] }}
                  >
                    <TaskItem
                      task={item}
                      index={index}
                      scrollToPosition={handleScrollToItem}
                      stopEditing={handleStopEditing}
                    />
                  </Animated.View>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 8,
                  paddingBottom: startEditing ? 320 : 32,
                }}
              />
            </TasksListContainer>
          ) : (
            <EmptyListContainer>
              <FontAwesome5
                name="tasks"
                size={RFValue(36)}
                color={theme.colors.text_light}
              />
              <EmptyListMainMessage>
                Nenhuma tarefa cadastrada.
              </EmptyListMainMessage>
              <EmptyListSecondaryMessage>
                Entre com o título da tarefa e toque no
                <EmptyListFeaturedTextIcon>“+”</EmptyListFeaturedTextIcon>
                para cadastrar.
              </EmptyListSecondaryMessage>
            </EmptyListContainer>
          )}
        </Body>
      </Container>
    </TouchableWithoutFeedback>
  );
}
