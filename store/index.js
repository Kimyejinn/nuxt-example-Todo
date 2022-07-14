export const state = () => ({
  tasks: []
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks];
    // 위 코드와 아래 코드는 같은 액션
    // state.tasks.push({ content: task, done: false })
    // state.tasks.unshift({ content: task, done: false })
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done;
  }
}
