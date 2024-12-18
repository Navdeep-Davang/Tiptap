
import { LinkEditorPanel } from '@/dir/components/panels'
import { Icon } from '@/dir/components/ui/Icon'
import { ActionBar } from '@/dir/components/ui/ActionBar'
import * as Popover from '@radix-ui/react-popover'

export type EditLinkPopoverProps = {
  onSetLink: (link: string, openInNewTab?: boolean) => void
}

export const EditLinkPopover = ({ onSetLink }: EditLinkPopoverProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <ActionBar.Button tooltip="Set Link">
          <Icon name="Link" />
        </ActionBar.Button>
      </Popover.Trigger>
      <Popover.Content>
        <LinkEditorPanel onSetLink={onSetLink} />
      </Popover.Content>
    </Popover.Root>
  )
}
