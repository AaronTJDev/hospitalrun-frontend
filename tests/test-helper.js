import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import loadEmberExam from 'ember-exam/test-support/load';

<<<<<<< HEAD
loadEmberExam();

=======
>>>>>>> d6c7d526... message
setApplication(Application.create(config.APP));

start();
