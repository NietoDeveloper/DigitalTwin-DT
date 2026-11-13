import cors from 'cors';
import express, { type ErrorRequestHandler, type Express } from 'express';
import * as content from '@dtdt/content';

const startedAt = Date.now();

export function cre