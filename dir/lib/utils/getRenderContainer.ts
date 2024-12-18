import { Editor } from '@tiptap/react'

export const getRenderContainer = (editor: Editor, nodeType: string) => {
  const { view, state } = editor
  const { from } = state.selection

  const focusedElements = document.querySelectorAll('.has-focus')
  const lastFocusedElement = focusedElements[focusedElements.length - 1]

  if (lastFocusedElement) {
    const dataType = lastFocusedElement.getAttribute('data-type')
    if (dataType === nodeType || lastFocusedElement.classList.contains(nodeType)) {
      return lastFocusedElement
    }
  }

  const currentNode = view.domAtPos(from).node as HTMLElement
  let container: HTMLElement | null = currentNode

  if (!container.tagName) {
    container = currentNode.parentElement
  }

  while (container) {
    const dataType = container.getAttribute('data-type')
    if (dataType === nodeType || container.classList.contains(nodeType)) {
      return container
    }
    container = container.parentElement
  }

  return null
}

export default getRenderContainer
