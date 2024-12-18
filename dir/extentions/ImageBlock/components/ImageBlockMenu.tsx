import { BubbleMenu as BaseBubbleMenu, useEditorState } from '@tiptap/react'
import React, { JSX, useCallback, useRef } from 'react'
import { Instance, sticky } from 'tippy.js'
import { v4 as uuid } from 'uuid'

import { getRenderContainer } from '@/dir/lib/utils'
import { ActionBar } from '../../../components/ui/ActionBar'
import { Icon } from '../../../components/ui/Icon'
import { ImageBlockWidth } from './ImageBlockWidth'
import { MenuProps } from '@/dir/components/menus/types'


export const ImageBlockMenu = ({ editor, appendTo }: MenuProps): JSX.Element => {
  const menuRef = useRef<HTMLDivElement>(null)
  const tippyInstance = useRef<Instance | null>(null)

  const getReferenceClientRect = useCallback(() => {
    const renderContainer = getRenderContainer(editor, 'node-imageBlock')
    const rect = renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)

    return rect
  }, [editor])

  const shouldShow = useCallback(() => {
    const isActive = editor.isActive('imageBlock')

    return isActive
  }, [editor])

  const onAlignImageLeft = useCallback(() => {
    editor.chain().focus(undefined, { scrollIntoView: false }).setImageBlockAlign('left').run()
  }, [editor])

  const onAlignImageCenter = useCallback(() => {
    editor.chain().focus(undefined, { scrollIntoView: false }).setImageBlockAlign('center').run()
  }, [editor])

  const onAlignImageRight = useCallback(() => {
    editor.chain().focus(undefined, { scrollIntoView: false }).setImageBlockAlign('right').run()
  }, [editor])

  const onWidthChange = useCallback(
    (value: number) => {
      editor.chain().focus(undefined, { scrollIntoView: false }).setImageBlockWidth(value).run()
    },
    [editor],
  )
  const { isImageCenter, isImageLeft, isImageRight, width } = useEditorState({
    editor,
    selector: ctx => {
      return {
        isImageLeft: ctx.editor.isActive('imageBlock', { align: 'left' }),
        isImageCenter: ctx.editor.isActive('imageBlock', { align: 'center' }),
        isImageRight: ctx.editor.isActive('imageBlock', { align: 'right' }),
        width: parseInt(ctx.editor.getAttributes('imageBlock')?.width || 0),
      }
    },
  })

  return (
    <BaseBubbleMenu
      editor={editor}
      pluginKey={`imageBlockMenu-${uuid()}`}
      shouldShow={shouldShow}
      updateDelay={0}
      tippyOptions={{
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: 'flip', enabled: false }],
        },
        getReferenceClientRect,
        onCreate: (instance: Instance) => {
          tippyInstance.current = instance
        },
        appendTo: () => {
          return appendTo?.current
        },
        plugins: [sticky],
        sticky: 'popper',
      }}
    >
      <ActionBar.Wrapper shouldDisplayContent={shouldShow()} ref={menuRef}>
        <ActionBar.Button tooltip="Align image left" active={isImageLeft} onClick={onAlignImageLeft}>
          <Icon name="AlignHorizontalDistributeStart" />
        </ActionBar.Button>
        <ActionBar.Button tooltip="Align image center" active={isImageCenter} onClick={onAlignImageCenter}>
          <Icon name="AlignHorizontalDistributeCenter" />
        </ActionBar.Button>
        <ActionBar.Button tooltip="Align image right" active={isImageRight} onClick={onAlignImageRight}>
          <Icon name="AlignHorizontalDistributeEnd" />
        </ActionBar.Button>
        <ActionBar.Divider />
        <ImageBlockWidth onChange={onWidthChange} value={width} />
      </ActionBar.Wrapper>
    </BaseBubbleMenu>
  )
}

export default ImageBlockMenu
