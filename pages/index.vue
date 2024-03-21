<script setup>
const boardStore = useBoardStore();
</script>

<template>
  <div class="board-wrapper">
    <main class="board">
      <UContainer
        v-for="column in boardStore.board.columns"
        :key="column.name"
        class="column"
      >
        <h2 class="mb-4">{{ column.name }}</h2>
        <ul>
          <li v-for="task in column.tasks" :key="task.id">
            <UCard class="mb-4">
              <strong>{{ task.name }}</strong>
              <p>{{ task.description }}</p>
            </UCard>
          </li>
        </ul>
      </UContainer>
    </main>
  </div>

  <!--
<main class="board p-5">
    <h1 class="text-xl mb-3">{{ boardStore.board.name }}</h1>
    <div
      v-for="column in boardStore.board.columns"
      :key="column.name"
      class="mb-6 px-6"
    >
      <h2 class="text-lg">{{ column.name }}</h2>
      <ul>
        <li v-for="task in column.tasks" :key="task.id" class="px-6 mb-6">
          <strong>{{ task.name }}</strong>
          <p>
            {{ task.description }}
          </p>
        </li>
      </ul>
    </div>
  </main>
--></template>
