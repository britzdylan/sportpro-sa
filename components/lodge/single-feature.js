import { Icon, InlineIcon } from '@iconify/react';
import checkCircle from '@iconify/icons-bi/check-circle';

export default function SingleFeature({ title, desc, index}) {

    return (
        <div key={index} style={{ maxWidth : '300px'}} className="mr-0 mb-4">
            <div className="flex flex-row items-center">
                <Icon icon={checkCircle} style={{fontSize: '16px', color : '#D39F29'}} />
                <h3 className="text-lg my-0 ml-4 font-bold">{title}</h3>
            </div>
            <p className="ml-8 text-md mt-2">{desc}</p>
        </div>
    )
}