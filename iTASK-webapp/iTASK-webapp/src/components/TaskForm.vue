<template>
  <form @submit.prevent="addTask">
    <input v-model="title" class="form-control" placeholder="Task Title" />
    <input
      v-model="deadline"
      class="form-control mt-2"
      placeholder="Deadline"
    />
    <button class="btn btn-primary mt-3" type="submit">Add Task</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      deadline: "",
    };
  },
  methods: {
    addTask() {
      this.$emit("add-task", { title: this.title, deadline: this.deadline });
      this.title = "";
      this.deadline = "";
    },
  },
};
</script>
