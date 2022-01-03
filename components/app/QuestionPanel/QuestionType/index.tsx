import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { QuestionTypeState } from "..";

interface Props {
  state: QuestionTypeState;
}

const types = [
  { name: "Explain Concept" },
  { name: "Fix this Error" },
  { name: "How do I do this?" },
  { name: "Generate Example" },
];

export default function QuestionType({}: Props) {
  const [selected, setSelected] = useState(types[0]);

  return (
    <div className="w-full text-black lg:w-72 top-16">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          {/* The closed ListBox view */}
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {types.map((q_type, q_typeIdx) => (
                <Listbox.Option
                  key={q_typeIdx}
                  className={({ active }) =>
                    // Style active items differently
                    `${active ? "text-rosie-900 bg-rosie-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={q_type}
                >
                  {({ selected, active }) => (
                    <>
                      {/* Style any individual option */}
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {q_type.name}
                      </span>
                      {/* Display check if selected */}
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-rosie-600" : "text-rosie-600"
                          }
                              absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
