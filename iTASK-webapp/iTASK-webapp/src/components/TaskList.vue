<template>
  <ul class="list-group">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <span>{{ task.title }} ({{ task.deadline }})</span>
      <button class="btn btn-danger" @click="$emit('delete-task', task.id)">
        Delete
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["tasks"],
};
</script>
