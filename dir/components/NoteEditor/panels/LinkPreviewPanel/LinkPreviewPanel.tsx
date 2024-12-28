import { Icon } from '../../ui/Icon'
import { Container } from '../../ui/Container'
import { ActionBar } from '../../ui/ActionBar'
import Tooltip from '../../ui/Tooltip'

export type LinkPreviewPanelProps = {
  url: string
  onEdit: () => void
  onClear: () => void
}

export const LinkPreviewPanel = ({ onClear, onEdit, url }: LinkPreviewPanelProps) => {
  return (
    <Container className="flex items-center gap-2 p-2">
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm underline break-all">
        {url}
      </a>
      <ActionBar.Divider />
      <Tooltip title="Edit link">
        <ActionBar.Button onClick={onEdit}>
          <Icon name="Pen" />
        </ActionBar.Button>
      </Tooltip>
      <Tooltip title="Remove link">
        <ActionBar.Button onClick={onClear}>
          <Icon name="Trash2" />
        </ActionBar.Button>
      </Tooltip>
    </Container>
  )
}
