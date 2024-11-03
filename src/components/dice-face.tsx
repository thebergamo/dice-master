const DiceTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      {children}
    </svg>
  );
};

const D4 = ({ value }: { value: number }) => {
  return (
    <DiceTemplate>
      <polygon
        points="50,10 10,90 90,90"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <line x1="50" y1="10" x2="10" y2="90" stroke="white" strokeWidth="2" />
      <line x1="50" y1="10" x2="90" y2="90" stroke="white" strokeWidth="2" />
      <line x1="10" y1="90" x2="90" y2="90" stroke="white" strokeWidth="2" />
      <text x="50" y="70" fontSize="30" textAnchor="middle" fill="white">
        {value}
      </text>
    </DiceTemplate>
  );
};

const D6 = ({ value }: { value: number }) => {
  return (
    <DiceTemplate>
      <rect
        x="20"
        y="20"
        width="60"
        height="60"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <text x="50" y="62" fontSize="30" textAnchor="middle" fill="white">
        {value}
      </text>
    </DiceTemplate>
  );
};

const D8 = ({ value }: { value: number }) => {
  return (
    <DiceTemplate>
      <polygon
        points="5,30 50,5 95,30 95,70 50,95 5,70"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <polygon
        points="8,70 50,8 92,70"
        fill="black"
        stroke="white"
        strokeWidth="3"
      />

      <text x="50" y="58" fontSize="30" textAnchor="middle" fill="white">
        {value}
      </text>
    </DiceTemplate>
  );
};

const D10 = ({ value }: { value: number }) => {
  return (
    <DiceTemplate>
      <polygon
        points="50,1.4 98.6,50 50,98.6 1.4,50"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <polygon
        points="50,2.4 83.5,50.7 51.2,69.5 15.4,51.9"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="83.0"
        y1="50.1"
        x2="89.7"
        y2="57.8"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="15.7"
        y1="51.7"
        x2="8.7"
        y2="58.7"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="51.0"
        y1="69.0"
        x2="50.0"
        y2="99.1"
        stroke="white"
        strokeWidth="2"
      />

      <text x="50" y="53" fontSize="30" textAnchor="middle" fill="white">
        {value}
      </text>
    </DiceTemplate>
  );
};

const D12 = ({ value }: { value: number }) => {
  return (
    <DiceTemplate>
      <polygon
        points="50,1.05 78.77,10.4 96.55,34.87 96.55,65.13 78.77,89.6 50,98.95 21.23,89.6 3.45,65.13 3.45,34.87 21.23,10.4"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <polygon
        points="50,16.24 82.11,39.57 69.85,77.32 30.15,77.32 17.89,39.57"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <line x1="50" y1="17" x2="50" y2="1" stroke="white" strokeWidth="2" />
      <line
        x1="19.06"
        y1="39.5"
        x2="3.72"
        y2="34.96"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="30.92"
        y1="77.63"
        x2="20.77"
        y2="90.00"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="78.18"
        y1="89.57"
        x2="69.18"
        y2="76.57"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="96.6"
        y1="34.96"
        x2="81.29"
        y2="39.61"
        stroke="white"
        strokeWidth="2"
      />

      <text x="50" y="62" fontSize="30" textAnchor="middle" fill="white">
        {value}
      </text>
    </DiceTemplate>
  );
};

const D20 = ({ value }: { value: number }) => {
  return (
    <DiceTemplate>
      <polygon
        points="50,1.15 92.3,25.58 92.3,74.42 50,98.85 7.7,74.42 7.7,25.58"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <polygon
        points="21.42,65.5 50,16 78.58,65.5"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <polygon
        points="78.07,65.25 50,96.5 21.93,65.25"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <line x1="50" y1="17" x2="50" y2="1" stroke="white" strokeWidth="2" />
      <line
        x1="91.63"
        y1="74.88"
        x2="78.43"
        y2="65.82"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="21.58"
        y1="66"
        x2="8"
        y2="74.47"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="78.69"
        y1="66.23"
        x2="90.89"
        y2="24.67"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="20.85"
        y1="66.61"
        x2="8.04"
        y2="25.30"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="49.45"
        y1="16.71"
        x2="9.27"
        y2="27.04"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="90.17"
        y1="24.48"
        x2="49.60"
        y2="15.81"
        stroke="white"
        strokeWidth="2"
      />

      <text x="50" y="62" fontSize="30" textAnchor="middle" fill="white">
        {value}
      </text>
    </DiceTemplate>
  );
};

const D100 = ({ value }: { value: number }) => {
  return (
    <DiceTemplate>
      <polygon
        points="50,10 25,30 75,30 50,90 25,70 75,70"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <text x="50" y="62" fontSize="30" textAnchor="middle" fill="black">
        {value}
      </text>
    </DiceTemplate>
  );
};

type DiceFaces = {
  D4: typeof D4;
  D6: typeof D6;
  D8: typeof D8;
  D10: typeof D10;
  D12: typeof D12;
  D20: typeof D20;
  D100: typeof D100;
};

const diceTypes: DiceFaces = {
  D4: D4,
  D6: D6,
  D8: D8,
  D10: D10,
  D12: D12,
  D20: D20,
  D100: D100,
};

export type DiceTypes = keyof DiceFaces;
export const RPGDice = ({
  type,
  value,
}: {
  type: DiceTypes;
  value: number;
}) => {
  const Dice = diceTypes[type];

  return <Dice value={value} />;
};
