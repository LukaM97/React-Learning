import {useNavigate, useParams} from 'react-router-dom';
import React from 'react';

export function withParams(Component){
    return props => <Component{...props} params={useParams()}/>;
};

export function withNavigation(Component){
    return props => <Component{...props} navigate={useNavigate()}/>;
}