import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Test:', () => {
  it('should renders component and test the label and class', async () => {
    const labelButton = 'Test Button';

    render(
      <Button handleClick={vi.fn()}>
        <>{labelButton}</>
      </Button>,
    );

    const element = screen.getByText(labelButton);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(labelButton);
  });
});
