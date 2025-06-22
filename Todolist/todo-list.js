let renderList = []
let input = document.querySelector('.input-value')  

window.onload = () => {
  const list = localStorage.getItem('renderList')
  const newRenderList = JSON.parse(list)
  if (!newRenderList) renderList = []
  renderList = newRenderList 
  render()
}

// 客户端存储
function saveRenderList() {
  localStorage.setItem('renderList', JSON.stringify(renderList))
}
      
// 新增
function addNew() { 
  renderList.push({
    value: input.value,
    id: Date.now()
  })
  saveRenderList()
  input.value = ''
  render()
}

// 删除
function deleteTask(id) {
  renderList = renderList.filter(item => item.id !== id)
  saveRenderList()
  render()
}

// 编辑
function editTask(id) {
  const value = renderList.find(item => item.id === id).value
  input.value = value
  input.focus()
  deleteTask(id)
}

// 为按钮添加监听事件
function addListenerBtnEvent(element) {
  element.addEventListener('click', (event) => {
    if (event.target.matches('.edit-btn')) {
      editTask(item.id)
    }
    if (event.target.matches('.delete-btn')) {
      deleteTask(item.id)
    }
  })
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
    addListenerBtnEvent(element)
    listContainer.appendChild(div)
  }
}