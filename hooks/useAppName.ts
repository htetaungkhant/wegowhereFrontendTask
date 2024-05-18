// import from third-party libraries
import { useSelector } from 'react-redux';

// import from local files
import { selectAppName } from '@/store';

export function useAppName() {
    return useSelector(selectAppName);
}