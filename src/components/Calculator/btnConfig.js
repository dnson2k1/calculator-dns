import { BackspaceIcon, SunIcon } from "@heroicons/react/outline";

const BTN_ACTIONS = {
  CALC: "CALC",
  THEME: "THEME",
  DELETE: "DELETE",
  CLEAR: "CLEAR",
  ADD: "ADD",
};

const BTNS = [
  {
    id: 1,
    display: "AC",
    action: BTN_ACTIONS.CLEAR,
    class: "btn__op btn__ac red",
  },
  {
    id: 2,
    display: <BackspaceIcon />,
    action: BTN_ACTIONS.DELETE,
    class: "btn__op red",
  },
  {
    id: 3,
    display: "/",
    class: "btn__op",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 4,
    display: "7",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 5,
    display: "8",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 6,
    display: "9",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 7,
    display: "x",
    class: "btn__op",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 8,
    display: "4",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 9,
    display: "5",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 10,
    display: "6",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 11,
    display: "-",
    class: "btn__op",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 12,
    display: "1",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 13,
    display: "2",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 14,
    display: "3",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 15,
    display: "+",
    class: "btn__op",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 16,
    display: <SunIcon />,
    action: BTN_ACTIONS.THEME,
  },
  {
    id: 17,
    display: "0",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 18,
    display: ".",
    action: BTN_ACTIONS.ADD,
  },
  {
    id: 19,
    display: "=",
    action: BTN_ACTIONS.CALC,
    class: "btn__op",
  },
];

export { BTN_ACTIONS, BTNS };
