let renderList = []
      
// 新增
function addNew() {
  const input = document.querySelector('.input-value')  
  renderList.push({
    value: input.value,
    id: Date.now()
  })
  input.value = ''
  render()
}

// 删除
function deleteTask(id) {
  renderList = renderList.filter(item => item.id !== id)
  render()
}

// 编辑
function editTask(id) {
  const value = renderList.find(item => item.id === id).value
  const input = document.querySelector('.input-value') 
  input.value = value
  input.focus()
  deleteTask(id)
}

// 渲染函数
function render() {
  const listContainer = document.querySelector('.list-input-container')
  listContainer.innerHTML = ''
  
  for (const item of renderList) {
    const div = document.createElement('div')
    div.innerHTML = `
      <div class="todo-list-container">
        <div class="todo-value">${item.value}</div>
        <button class="edit-btn" data-action="edit">edit</button>
        <button class='delete-btn' data-action="del">Del</button>
      </div>
    `
    const element = div.querySelector('.todo-list-container')
    element.addEventListener('click', (event) => {
      if (event.target.matches('.edit-btn')) {
        editTask(item.id)
      }
      if (event.target.matches('.delete-btn')) {
        deleteTask(item.id)
      }
    })
    listContainer.appendChild(div)
  }
}