import { Badge } from '@mantine/core';

interface ActiveBadgeProps {
    active?: boolean
}

export default function ActiveBadge(props: ActiveBadgeProps) {

    const { active } = props
    const color = active ? 'teal' : 'red'

    return (
        <Badge color={color} variant="filled">Active</Badge>
    );
}