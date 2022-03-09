import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { TotalInfo } from '../../../src/ui/portal/organisms/oc-chart/components/total-info';
import { TotalInfoProps } from '../../../src/ui/portal/organisms/oc-chart';

const setUp = (props: TotalInfoProps) => shallow(<TotalInfo {...props} />);

describe('Chart (total-info)', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = setUp({
      count: 1,
      countText: 'Total view 1',
      downloadUrl: './some-img-path',
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
