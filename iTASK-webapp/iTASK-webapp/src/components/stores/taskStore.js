// src/stores/taskStore.js
import { defineStore } from "pinia";
import { supabase } from "../supabaseClient";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const { data } = await supabase.from("tasks").select("*");
      this.tasks = data;
    },
    async addTask(task) {
      const { data } = await supabase.from("tasks").insert([task]);
      this.tasks.push(data[0]);
    },
    async deleteTask(id) {
      await supabase.from("tasks").delete().eq("id", id);
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
});
