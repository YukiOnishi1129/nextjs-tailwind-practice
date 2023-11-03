type Props = JSX.IntrinsicElements['button']

export const ActionButton: React.FC<Props> = ({ title, ...props }: Props) => (
  <button>{title}</button>
)
