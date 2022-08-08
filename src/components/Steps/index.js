function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Steps({ currentStep, setCurrentStep }) {
  const steps = [
    { number: 1, name: "Step 1", href: "#1" },
    { number: 2, name: "Step 2", href: "#2" },
    { number: 3, name: "Step 3", href: "#3" },
    { number: 4, name: "Step 4", href: "#4" },
  ];

  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : "",
              "relative"
            )}
          >
            {step.number <= currentStep  ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-indigo-500" />
                </div>
                <a
                  href={step.href}
                  className="relative w-9 h-9 flex text-white items-center justify-center bg-indigo-500 rounded-full hover:bg-indigo-900"
                >
                  {stepIdx + 1}
                </a>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="group relative w-9 h-9 flex items-center justify-center bg-white border-2 text-gray-400 border-gray-300 rounded-full hover:border-gray-400"
                >
                  {stepIdx + 1}
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
