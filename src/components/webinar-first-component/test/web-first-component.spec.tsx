import { newSpecPage } from '@stencil/core/testing';
import { WebinarFirstComponent } from '../webinar-first-component';

describe('webinar-first-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebinarFirstComponent],
      html: `<webinar-first-component></webinar-first-component>`,
    });
    expect(page.root).toEqualHtml(`
      <webinar-first-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </webinar-first-component>
    `);
  });
});
