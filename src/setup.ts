interface Teams {
  [key: string]: Array<TeamMember>
}

interface TeamMember {
  name: string,
  checked?: boolean
}

export function promptSetup(teamData: Teams) {
  const commonConfig = {
    type: 'checkbox',
    pageSize: 10,
  };

  let promptQuestions: Array<Object> = [];

  for(const key in teamData) {
    promptQuestions = [...promptQuestions,
      {
        ...commonConfig,
        message: `Select ${key}`,
        name: key,
        choices: teamData[key]
      }
    ];
  }

  return promptQuestions;
}
