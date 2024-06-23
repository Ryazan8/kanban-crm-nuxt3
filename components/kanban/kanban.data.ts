import {EnumStatus} from "~/types/deals.types";
import type {IColumn} from "~/components/kanban/kanban.types";

export const KANBAN_DATA: IColumn[] = [
    {
        id: EnumStatus.todo,
        name: 'Входящие',
        items: []
    },
    {
        id: EnumStatus['to-be-agreed'],
        name: 'На рассмотрении',
        items: []
    },
    {
        id: EnumStatus['in-progress'],
        name: 'В работе',
        items: []
    },
    {
        id: EnumStatus.produced,
        name: 'Произведено',
        items: []
    },
    {
        id: EnumStatus.done,
        name: 'Завершено',
        items: []
    }
]