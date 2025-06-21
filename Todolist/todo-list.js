let renderList = []
      
// 新增
function addNew() {
  const input = document.querySelector('.input-value')  
  renderList.push({
    value: input.value,
    id: Date.now()
  })
  render()
}

// 添加
function deleteTask(id) {
  renderList = renderList.filter(item => item.id !== id)
  render()
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
        <button class='delete-btn'>Del</button>
      </div>
    `
    const button = div.querySelector('.delete-btn')
    button.addEventListener('click', () => {
      deleteTask(item.id)
    })
    listContainer.appendChild(div)
  }
}