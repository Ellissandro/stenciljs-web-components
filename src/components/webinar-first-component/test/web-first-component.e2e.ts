import { newE2EPage } from '@stencil/core/testing';

describe('webbinar-first-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<webbinar-first-component></webbinar-first-component>');

    const element = await page.find('webbinar-first-component');
    expect(element).toHaveClass('hydrated');
  });
});
