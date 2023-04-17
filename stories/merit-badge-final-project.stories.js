import { html } from 'lit';
import '../src/merit-badge-final-project.js';

export default {
  title: 'MeritBadgeFinalProject',
  component: 'merit-badge-final-project',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <merit-badge-final-project
      style="--merit-badge-final-project-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </merit-badge-final-project>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
